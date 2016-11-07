#set ($MODULE_NAME = $NAME.substring(0, $NAME.indexOf('Test')))
#set ($CLASS_NAME = $MODULE_NAME.toLowerCase())
import React from 'react';
import { shallow } from 'enzyme';
import ${MODULE_NAME} from 'components//${MODULE_NAME}.js';

describe('<${MODULE_NAME} />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<${MODULE_NAME} />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "${CLASS_NAME}-component"', () => {
      expect(component.hasClass('${CLASS_NAME}-component')).to.equal(true);
    });
  });
});
