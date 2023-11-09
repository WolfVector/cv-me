import BasicLayout from 'src/modules/builder/editor/modules/basic/BasicLayout';
import SkillsLayout from 'src/modules/builder/editor/modules/skills/SkillsLayout';
import EducationLayout from 'src/modules/builder/editor/modules/education/EducationLayout';
import ExperienceLayout from 'src/modules/builder/editor/modules/experience/ExperienceLayout';
//import ActivitiesLayout from 'src/modules/builder/editor/modules/activities/ActivitiesLayout';
//import VolunteeringLayout from 'src/modules/builder/editor/modules/volunteering/VolunteeringLayout';
import AwardsLayout from 'src/modules/builder/editor/modules/awards/AwardsLayout';

export const headers: {
  [key: string]: { title: string; component: () => JSX.Element };
} = {
  'basic-details': { title: 'Detalles Básicos', component: BasicLayout },
  'skills-and-expertise': {
    title: 'Habilidades',
    component: SkillsLayout,
  },
  education: { title: 'Educación', component: EducationLayout },
  experience: { title: 'Experiencia', component: ExperienceLayout },
  //activities: { title: 'Activities', component: ActivitiesLayout },
  //volunteering: { title: 'Volunteering', component: VolunteeringLayout },
  awards: { title: 'Certificaciones', component: AwardsLayout },
};
