const isDate = util.isDate;
const dateFormat = util.dateFormat;

it('basic', function() {
    expect(isDate(toDate())).to.be.true;
    expect(isDate(toDate(null))).to.be.true;
    expect(dateFormat(toDate('20180501'), 'yyyymmdd')).to.equal('20180501');
    expect(dateFormat(toDate('2018-05-01'), 'yyyymmdd')).to.equal('20180501');
    expect(dateFormat(toDate(1525107450849), 'yyyymmdd')).to.equal('20180501');
});
