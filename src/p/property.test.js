it('basic', function() {
    const obj = { a: { b: 1 } };

    expect(property('a')(obj)).to.eql({ b: 1 });
    expect(property(['a', 'b'])(obj)).to.equal(1);
});
