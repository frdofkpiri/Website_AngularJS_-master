describe("Blog Application Test", function(){
    it("should test the main blog page", function(){
        browser.get("http://localhost:63342/LearningAngularJS_chapter2-master/public_html/index.html#!/");
        expect(browser.getTitle()).toEqual("LeGroupage.com. " +
            "Déménager pas cher. Partagez vos frais de déménagements,promotions et départs chaque semaine vers toute la France et Europe proche"+
        "Déménagement en groupage");
//gets the blog list
        var blogList = element.all(by.repeater('principle in blogList'));
//tests the size of the blogList
        expect(blogList.count()).toEqual(2);
        browser.get(
            "http://localhost:63342/LearningAngularJS_chapter2-master/public_html/index.html#!/principle/1");
        expect(browser.getTitle()).toEqual("AngularJS Blog");
//gets the comment list
        var commentList = element.all(
            by.repeater('comment in blogEntry.comments'));
//checks the size of the commentList
        expect(commentList.count()).toEqual(2);
    });
});