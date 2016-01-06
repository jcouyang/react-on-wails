import root from './controllers/root';

const routes = {
  '/?': root,
  '/:channel': root,
};

export default routes;
