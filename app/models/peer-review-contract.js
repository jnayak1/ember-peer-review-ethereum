import DS from 'ember-data';

export default DS.Model.extend({
    value: DS.attr('number'),
    researcher: DS.attr('string'),
    journal: DS.attr('string'),
    state: DS.attr('number'), // TODO: create transform mapping enum 
    fileHash: DS.attr('string'),
    transactionHash: DS.attr('string'),
    contractAddress: DS.attr('string')
});
