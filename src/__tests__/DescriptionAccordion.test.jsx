import React from 'react';
import { render, screen } from '@testing-library/react';
import DescriptionAccordion from '../components/DescriptionAccordion';

const mockDescription =
  "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, Mexico, home to over 400 employees. Wizeline has drawn attention for designing an office and culture focused on employee wellness and cultivating talent, earning a Super Espacios award by WeWork, Expansion Mexico, and Top Companies. Read more about the office here: https://www.wizeline.com/creating-first-class-facilities/ If you're interested in working with Wizeline and want to experience the culture and tour our offices live, contact us at www.wizeline.com/contact/";

it('render DescriptionAccordion', () => {
  render(<DescriptionAccordion description={mockDescription} />);

  expect(screen.getByText('Description')).toBeInTheDocument();
  expect(screen.getByText(/follow/i)).toBeInTheDocument();
});
