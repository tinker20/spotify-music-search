
describe('first-test', function() {

    var searchInput = element(by.css('input[ng-model="music.query"]'));
    var submitBtn = element(by.css('button[type="submit"]'));
    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('before login test', function() {
        expect(browser.getTitle()).toEqual('Spotify Music Search');
    });

    it('should search for an artist in spotify', function () {
        searchInput.sendKeys('John Mayer');
        submitBtn.click()
            .then(function () {
                console.log('Searched in the spotify api');
                return element.all(by.repeater('result in music.allResults')).count();
            })
            .then(function (count) {
                console.log('No of results returned', count);
                return expect(count).toEqual(28);
            })
            .then(function () {
                console.log('count evaluated to be 28');
            })
            .catch(function () {
                console.log(err);
            });
    });

});