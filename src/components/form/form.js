import * as lib from 'Lib/form/form.js';
import * as handlers from 'Lib/form/form-handlers.js';
import { sendFormJSON } from 'Lib/form/form-send.js';

const Form = lib.form;

Form.prototype = {
  constructor: Form,
  init: lib.init,
  setListeners: lib.setListeners,
  destroy: lib.destroy,
  getFormData: lib.getFormData,
  resetForm: lib.resetForm,
  sendForm: sendFormJSON,
  sendFormHandler: handlers.fakeSendFormHandler,
  submitForm: lib.submitForm,
  showSubmitting: lib.showSubmitting,
  showFormOverlay: lib.showFormOverlay,
  hideFormOverlay: lib.hideFormOverlay,
  showFormResposne: lib.showFormResposne,
  hideFormResposne: lib.hideFormResposne,
  onSuccessHandler: handlers.onSuccessHandler,
  onErrorHandler: handlers.onErrorHandler,
  handleEvent: lib.handleEvent,
};

export default Form;
