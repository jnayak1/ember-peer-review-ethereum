import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    subject: DS.attr('string'),
    description: DS.attr('string'),
    feeOSB: DS.attr('number')
});
