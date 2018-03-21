"use strict";

module.exports = () => {
  return `
    <div class="st-block__ui-delete-controls">
      <label class="st-block__delete-label">
        ${st.i18n.t('general:delete')}
      </label>
      <button class='st-block-ui__confirm js-st-block-confirm-delete' type="button">
        ${st.i18n.t('general:yes')}
      </button>
      <button class='st-block-ui__confirm js-st-block-deny-delete' type="button">
        ${st.i18n.t('general:no')}
      </button>
    </div>
  `;
};
