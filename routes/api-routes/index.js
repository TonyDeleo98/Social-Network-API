const router = require('express').Router();
// Import user and thought routes
const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thought-routes.js');
// Define endpoints for user and thought routes
router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);
// Export the router
module.exports = router;