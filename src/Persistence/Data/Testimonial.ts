import { GraphQLCollection } from './Common';

export interface Testimonial {
  feedback: string;
  name: string;
  occupation: string;
}

export type CollectionResponse = {
  testimonialCollection: GraphQLCollection<Testimonial>;
};
