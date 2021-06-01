import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') name;
  @attr('string') image;
  @attr('boolean', { defaultValue: false }) value;
  @attr('boolean', { defaultValue: false }) isArchived;
  changeValue() {
    this.value = !this.value;
  }

  SetArchiveStatus() {
    this.isArchived = !this.isArchived;
  }
}
