it('basic', function() {
    const obj = [{ a: { b: 1 } }, { a: 2 }];
    const obj2 = cloneDeep(obj);

    expect(obj[0] === obj2[0]).to.be.false;
    expect(obj[0].a === obj2[0].a).to.be.false;
    expect(obj).to.eql(obj2);
});
