var sinon = require('sinon');

describe('Add Purchase', () => {
  let createdProduct
  before(async (done) => {
    sinon.stub(UserService, 'getLoginState', (req) => {
      return true;
    });

    createdProduct = await db.Product.create({
      name: 'Add Purchase 超值組',
      description: '讚讚讚',
      stockQuantity: '100',
      isPublish: 'true',
      price: 999,
      size: 'normal',
      service: ["express"],
      country: 'U.K',
      madeby: 'TW',
      color: 3,
      productNumber: '1-USA-2-G',
      spec: 'super-metal',
      photos: ['https://dl.dropboxusercontent.com/u/9662264/iplusdeal/images/demo/shop-type-1.jpg']
    });
    done();
  });

  after((done) => {
    UserService.getLoginState.restore();
    done();
  });

  it('update reducePrice', (done) => {
    request(sails.hooks.http.app)
      .put(`/admin/buymoreUpdate`)
      .send({
         limit: '0',
          type: 'reduce',
          startDate: '2015-09-10',
          endDates: '2015-09-30',
          reducePrice: '1000',
          discount: '',
          productIds: [createdProduct.id]
      })
      .end((err, res) => {
        console.log('res.body', res.body);
        if (res.statusCode === 500) {
          return done(body)
        }
        res.statusCode.should.equal(200);
        return done();
      })
  });

  it('update reducePrice', (done) => {
    request(sails.hooks.http.app)
      .put(`/admin/buymoreUpdate`)
      .send({
        limit: '0',
        startDate: '2015-09-17',
        endDates: '2015-09-30',
        reducePrice: '',
        type: 'discount',
        discount: '9',
        productIds: [createdProduct.id]
      })
      .end((err, res) => {
        console.log('res.body', res.body);
        if (res.statusCode === 500) {
          return done(body)
        }
        res.statusCode.should.equal(200);
        return done();
      })
  });

});
