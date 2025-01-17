it('basic', function() {
    expect(template('Hello <%= name %>!')({ name: 'licia' })).to.equal(
        'Hello licia!'
    );
    expect(template('<p><%- name %></p>')({ name: '<licia>' })).to.equal(
        '<p>&lt;licia&gt;</p>'
    );
    expect(
        template('<%if (echo) {%>Hello licia!<%}%>')({ echo: true })
    ).to.equal('Hello licia!');

    expect(
        template('<p><%= util["upperCase"](name) %></p>', {
            upperCase: function(str) {
                return str.toLocaleUpperCase();
            }
        })({ name: 'licia' })
    ).to.equal('<p>LICIA</p>');
    expect(template('<p>\u2028<%= "\\u2028\\u2029" %>\u2029</p>')()).to.equal(
        '<p>\u2028\u2028\u2029\u2029</p>'
    );
});
