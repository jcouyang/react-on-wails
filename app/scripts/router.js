import root from './controllers/root';
import serverAdapter from './serverAdapter';
const routes = {
  '/?': root,
  '/:channel': root,
};

export default routes;
