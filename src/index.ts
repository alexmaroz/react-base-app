import _ from 'lodash';

export const TestModule = () => {
  console.log(_.join(['Hello', 'webpack2'], ' '));
}