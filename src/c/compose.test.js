it('basic', function() {
    const welcome = compose(
        function(name) {
            return 'hi: ' + name;
        },
        function(name) {
            return name.toUpperCase() + '!';
        }
    );

    expect(welcome('licia')).to.equal('hi: LICIA!');
});
