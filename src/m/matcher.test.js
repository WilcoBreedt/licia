const filter = util.filter;

it('basic', function() {
    const objects = [{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }];

    expect(filter(objects, matcher({ a: 4, c: 6 }))).to.eql([
        { a: 4, b: 5, c: 6 }
    ]);
});
