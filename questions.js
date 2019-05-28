const questions = [
    {
        type : 'list',
        name : 'mockRequest',
        message : 'Mock page requests?',
        choices : ['Open', 'View']
    },
    {
        type : 'list',
        name : 'pageType',
        message : 'Select page type ...',
        choices : ['Home', 'PDP', 'PLP', 'Cart', 'Delivery', 'Payment', 'Confirmation'],
        default: 2,
        pageSize: 3
    },
    {
      type : 'list',
      name : 'site',
      message : 'Select site ...',
      choices: ["GB", "IE", "SK"]
    }
  ];

  module.exports = questions