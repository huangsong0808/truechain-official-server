'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);
  router.post('/uploaad', controller.home.uploaad);
  router.resources('topics', '/api/v2/topics', controller.topics);
};