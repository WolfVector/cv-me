import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext } from 'react';
import { StateContext } from 'src/modules/builder/resume/ResumeLayout';
import { SectionValidator } from 'src/helpers/common/components/ValidSectionRenderer';
import { useThemes } from 'src/stores/themes';
import { SYSTEM_COLORS } from 'src/helpers/constants/index';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);
  useThemes.getState().chooseTheme(SYSTEM_COLORS[2]);

  return (
    <div className="p-2 bg-slate-400">
      <BasicIntro
        name={resumeData.basics.name}
        label={resumeData.basics.label}
        url={resumeData.basics.url}
        email={resumeData.basics.email}
        city={resumeData.basics.location.city}
        phone={resumeData.basics.phone}
        image={resumeData.basics.image}
      />
      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={resumeData.basics.summary}>
            <SummarySection summary={resumeData.basics.summary} />
          </SectionValidator>

          <SectionValidator value={resumeData.work}>
            <WorkSection experience={resumeData.work} />
          </SectionValidator>

          <SectionValidator value={resumeData.awards}>
            <AwardSection awardsReceived={resumeData.awards} />
          </SectionValidator>
        </div>

        <div className="basis-[40%] p-3">
          <SectionValidator value={resumeData.basics.objective}>
            <Objective objective={resumeData.basics.objective} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.languages}>
            <SkillsSection title="Lenguajes" list={resumeData.skills.languages} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.technologies}>
            <SkillsSection title="Tecnologías" list={resumeData.skills.technologies} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.frameworks}>
            <SkillsSection title="Frameworks" list={resumeData.skills.frameworks} />
          </SectionValidator>

          <SectionValidator value={resumeData.skills.tools}>
            <SkillsSection title="Herramientas" list={resumeData.skills.tools} />
          </SectionValidator>

          <SectionValidator value={resumeData.education}>
            <EducationSection education={resumeData.education} />
          </SectionValidator>

          <SectionValidator value={resumeData.volunteer}>
            <VolunteerSection volunteer={resumeData.volunteer} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}
