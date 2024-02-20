import { PluginKind, declareValuePlugin } from '@stryker-mutator/api/plugin';

export const strykerPlugins = [
  declareValuePlugin(PluginKind.Ignore, 'react-ignorer', {
    /**
     * @param {import('@babel/core').NodePath} path
     */
    shouldIgnore(path) {
      // Define the conditions for which you want to ignore mutants
      if (
        path.isArrayExpression() &&
        path.parentPath.isCallExpression() &&
        path.parentPath.node.callee.type === 'Identifier' &&
        path.parentPath.node.callee.name === 'useEffect' &&
        path.parentPath.node.arguments[1] === path.node
      ) {
        return "Don't mutate useEffect dependencies";
      }
    },
  }),
];
