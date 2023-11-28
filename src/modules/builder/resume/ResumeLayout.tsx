import { Context, createContext, useEffect } from 'react';

import { AVAILABLE_TEMPLATES } from 'src/helpers/constants';
import { ThemeProvider } from '@mui/material/styles';
import { useResumeStore } from 'src/stores/useResumeStore';
import { useTemplates } from 'src/stores/useTemplate';
import { useThemes } from 'src/stores/themes';
import { useZoom } from 'src/stores/useZoom';
import { SYSTEM_COLORS } from 'src/helpers/constants/index';
import { useSearchParams } from 'next/navigation';

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null);

export const ResumeLayout = () => {
  const resumeData = useResumeStore();
  const zoom = useZoom((state) => state.zoom);

  const templateId = useTemplates((state) => state.activeTemplate.id);
  const Template = AVAILABLE_TEMPLATES[templateId].component;
  const selectedTheme = useThemes((state) => state.selectedTheme);
  StateContext = createContext(resumeData);

  const searchParams = useSearchParams()
  const theme: any = searchParams.get("theme")

  if(theme != null) {
    //console.log(theme)
    useThemes.getState().chooseTheme(SYSTEM_COLORS[theme]);
  }

  let bg_color = "bg-white"
  let txt_color = "text-black"

  switch(theme) {
    case "3":
      bg_color = "bg-black"
      txt_color = "text-white"
      break
    case "4":
      bg_color = "bg-slate-200"
      //txt_color = "text-white"
      break
  }

  /*if(theme != null && theme == 3) {
    
  }*/
  
  useEffect(() => {
    const selectedTemplateId =
      localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id;
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId]);
  }, []);

  return (
    <div className="mx-5 print:mx-0 mb-2 print:mb-0">
      <div
        style={{ transform: `scale(${zoom})` }}
        className="origin-top transition-all duration-300 ease-linear	print:!scale-100"
      >
        <div className={`w-[210mm] h-[296mm] ${bg_color} ${txt_color} my-0 mx-auto`}>
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>{Template && <Template />}</ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  );
};
