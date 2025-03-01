from logging import Logger
from typing import Dict, List

from mage_ai.data_preparation.models.block import Block


class GlobalDataProductBlock(Block):
    def get_global_data_product(self):
        # Avoid circular dependency of Pipeline class
        from mage_ai.data_preparation.models.global_data_product import (
            GlobalDataProduct,
        )

        override_configuration = (self.configuration or {}).get('global_data_product', {})
        global_data_product = GlobalDataProduct.get(override_configuration.get('uuid'))

        for key in [
            'outdated_after',
            'outdated_starting_at',
            'settings',
        ]:
            value = override_configuration.get(key)
            if value and len(value) >= 1:
                setattr(global_data_product, key, value)

        return global_data_product

    def _execute_block(
        self,
        outputs_from_input_vars,
        from_notebook: bool = False,
        global_vars: Dict = None,
        logger: Logger = None,
        logging_tags: Dict = None,
        **kwargs,
    ) -> List:
        # Avoid circular dependency of Pipeline class
        from mage_ai.orchestration.triggers import global_data_product as trigger

        trigger.trigger_and_check_status(
            self.get_global_data_product(),
            block=self,
            from_notebook=from_notebook,
            logger=logger,
            logging_tags=logging_tags,
            variables=global_vars.get('variables') if global_vars else None,
        )

        return []
