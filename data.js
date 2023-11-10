import { v4 as uuidv4 } from 'uuid';
import avatarAli from './asset/images/avatar-ali.png';
import avatarAnisha from './asset/images/avatar-anisha.png';
import avatarRichard from './asset/images/avatar-richard.png';
import avatarShanai from './asset/images/avatar-shanai.png';

const data = [
  {
    num: '01',
    id: uuidv4(),
    title: 'Track company-wide progress',
    description: 'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again.'
  },
  {
    num: '02',
    id: uuidv4(),
    title: 'Advanced built-in reports',
    description: 'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.'
  },
  {
    num: '03',
    id: uuidv4(),
    title: 'Everything you need in one place',
    description: 'Stop jumping from one service to another to communicate, store files, track tasks, and share documents. Manage offers an all-in-one team productivity solution.'
  },
  {
    id: uuidv4(),
    name: 'Anisha Li',
    testimonial: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    userImg: avatarAnisha
  },
  {
    id: uuidv4(),
    name: 'Ali Bravo',
    testimonial: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”',
    userImg: avatarAli
  },
  {
    id: uuidv4(),
    name: 'Richard Watts',
    testimonial: '“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”',
    userImg: avatarRichard
  },
  {
    id: uuidv4(),
    name: 'Shanai Gough',
    testimonial: '“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”',
    userImg: avatarShanai
  }
];

export default data;
