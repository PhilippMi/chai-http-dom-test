const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiDom = require('chai-dom');
const jsdom = require('jsdom');

const expect = chai.expect;

before(function() {
  //chai.use(chaiHttp);
  chai.use(chaiDom);
});

describe('chai-http', function() {

  it('should not interfere with chai-dom', function() {
    
  	return new Promise((resolve, reject) => {
        jsdom.env({
            html: "<html><body>This is the content</body></html>",
            done: function (errs, window) {
            	if(errs) {
            		return resject(errs);
            	}
                global.window = window;
                global.NodeList = window.NodeList;
                global.HTMLElement = window.HTMLElement;
                resolve();
            }
        });
    }).then(() => {
    	expect(window.document.querySelector('body')).to.have.text('This is the content');
    });

  });

});