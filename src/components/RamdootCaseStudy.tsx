// Ramdoot case study — copy and spacing taken 1:1 from Figma "Ramdoot — UX Case Study" (node 3001:25584).
// `mt`, `pt` and `pb` are the Figma gaps in px at 1440 wide.
import {
  Body, CaseStudy, Columns, Compare, Eyebrow, Feature, Footer, Heading, Intro, Notice,
  Pair, Panel, Row, Screens, Section, ShaderButton, Showcase, Split, Steps, type Img,
} from './CaseStudyKit';

const dir = '/images/Ramdoot-CS';
const FIGMA_URL = 'https://www.figma.com/design/ABq4OGc0qgzCml5NbAqYKT/Ramdoot-Main-Design---Atharv?node-id=3001-25584&t=D2zGjYbVVcyrL97E-1';
const img = (name: string, alt: string): Img => ({ src: `${dir}/${name}.webp`, alt });

const shots = {
  heroDesktop: img('hero-desktop', 'Ramdoot V2 home on desktop: hero with featured magazine covers and Continue Reading'),
  heroMobile: img('hero-mobile', 'Ramdoot V2 home on mobile'),
  library: img('access-library', 'Ramdoot V2 library showing where editions are accessed'),
  issue: img('access-issue', 'Ramdoot V2 issue detail with the single-issue purchase entry'),
  journeyDesktop: img('journey-desktop', 'Ramdoot V2 desktop home with discovery and Continue Reading'),
  journeyMobile: img('journey-mobile', 'Ramdoot V2 mobile home with the same entry points'),
  reader: img('reader', 'Ramdoot V2 PDF reader showing a magazine spread'),
  visualDesktop: img('visual-desktop', 'Ramdoot V2 library with neutral surfaces around the illustrated covers'),
  visualMobile: img('visual-mobile', 'Ramdoot V2 mobile screen'),
};

export default function RamdootCaseStudy() {
  return (
    <CaseStudy>
      <Intro
        tags={['RAMDOOT', 'PRODUCT DESIGN', 'IN DEVELOPMENT']}
        title={'Ramdoot\nFrom print to digital reading.'}
        lede="Bringing Ramdoot’s magazine to digital readers through discovery, flexible access and a familiar reading experience."
        action={<ShaderButton href={FIGMA_URL} label="View the Figma file" />}
        meta={[['ROLE', 'Volunteer Design Lead'], ['SCOPE', 'Product, visual design & prototypes'], ['DELIVERY', 'Design + development in parallel']]}
        showcase={<Showcase desktop={shots.heroDesktop} mobile={shots.heroMobile} />}
        caption="V2 reference screens · Missing media is labelled “Cover art pending” in these presentation copies."
      />

      <Section pt={64} pb={64}>
        <Eyebrow>01 / FROM PRINT TO DIGITAL</Eyebrow>
        <Split
          mt={36}
          heading={'The content existed.\nAccess had limits.'}
          paragraphs={[
            'Ramdoot Restore is an NGO with a pledge to restore 108 temples across India through community funding. Its magazine shares history and the work behind the mission.',
            'Physical distribution limited its reach. Going digital creates a route for readers to discover editions, gain access and read beyond the printed copy.',
          ]}
        />
        <Panel mt={115} label="THE DESIGN CHALLENGE" text={'Make the magazine easier to discover and read, while supporting\nboth recurring readers and occasional buyers.'} />
      </Section>

      <Section pt={58} pb={99}>
        <Eyebrow>[02 / THE AUDIENCE PIVOT]</Eyebrow>
        <Heading mt={36} size={46} className="cs-w700" text={'Our first assumption\nwas too narrow.'} />
        <Body mt={31} size={23} text="Offline interest challenged who we thought the magazine was for." />
        <Compare
          mt={57}
          variant="pivot"
          from={{ label: 'WE EXPECTED', text: 'Older readers would\nlead interest.' }}
          to={{ label: 'WHAT CHANGED OUR DIRECTION', text: 'Younger readers were more\ninterested than we expected.' }}
        />
        <Row mt={37} label="SOURCE / METHOD" text="Designer-reported conversations with existing readers and observations during offline selling. No participant or session count has been supplied; this is qualitative evidence, not an adoption metric." />
      </Section>

      <Section pt={58} pb={95}>
        <Eyebrow>[03 / ACCESS WITHOUT FORCING COMMITMENT]</Eyebrow>
        <Heading mt={29} text="Two reader intentions. Two paths." />
        <Body mt={32} size={22} className="cs-w1210" text="I retained subscription and single-issue access because a regular reader and an occasional buyer should not have to make the same commitment." />
        <Pair
          mt={41}
          items={[
            { label: 'A / RECURRING READER', text: 'Subscribe → receive new editions → library', img: shots.library, caption: 'SUBSCRIPTION ACCESS / V2 LIBRARY' },
            { label: 'B / OCCASIONAL READER', text: 'Choose an issue → purchase → read', img: shots.issue, caption: 'ONE-TIME PURCHASE / V2 ISSUE DETAIL' },
          ]}
        />
        <Body mt={38} size={18} className="cs-w1200" text="The library shows where editions are accessed; it does not show subscription plan selection. The right-hand screen provides the issue-specific purchase entry." />
        <Body mt={45} size={17} muted className="cs-w1200" text="Shared family access is intended. Entitlement rules still need to be documented and validated with development." />
      </Section>

      <Section pt={64} pb={35}>
        <Eyebrow>04 / THE READER JOURNEY</Eyebrow>
        <Heading mt={30} text={'Give readers a\nclear next step.'} />
        <Body mt={70} className="cs-w1190" text="I kept discovery and “Continue Reading” together because returning readers need a direct route back, while new readers still need a starting point." />
        <Screens mt={49} variant="journey" desktop={shots.journeyDesktop} mobile={shots.journeyMobile} />
        <Eyebrow mt={34} className="cs-w760">DISCOVER &amp; RETURN</Eyebrow>
        <Body mt={13} className="cs-w1100" text="The same entry points carry across desktop and mobile. Reading usability remains to be tested." />
      </Section>

      <Section pt={64} pb={39}>
        <Eyebrow>05 / MAKE CONTENT THE DESTINATION</Eyebrow>
        <Heading mt={30} text={'A familiar format.\nNew ways to begin.'} />
        <Body mt={70} className="cs-w1190" text="The current design retains the PDF format. AI summaries and personalized introductions are in development to help readers understand an edition and choose where to start." />
        <Feature
          mt={53}
          img={shots.reader}
          label="IN DEVELOPMENT"
          items={[
            { title: 'A short summary', text: 'An overview before choosing a passage or reading the full magazine.' },
            { title: 'A relevant introduction', text: 'A starting point connecting a new issue to topics the reader may find interesting.' },
          ]}
        />
        <Body mt={34} size={16} muted className="cs-w1230" text="The image shows the current reader, not the upcoming AI features. Their benefits have not yet been validated." />
        <Body mt={22} className="cs-w1230" text="Next to test: summary accuracy, useful recommendations and reader control." />
      </Section>

      <Section pt={56} pb={147}>
        <Eyebrow>[06 / A DECISION, NOT JUST AN AI TOOL]</Eyebrow>
        <Heading mt={34} size={42} text={'When I would override\nthe AI recommendation.'} />
        <Notice mt={30} text="DRAFT SCENARIO / Assumed at the designer’s request. Replace or confirm against a real exchange before publication." />
        <Row mt={29} size={27} label="DECISION TO EXAMINE" text="Should the first access choice push everyone into a subscription?" />
        <Compare
          mt={67}
          variant="decision"
          from={{ label: 'AI PROPOSES · ASSUMED', text: 'Lead with subscription.\nMove single-issue access lower.' }}
          to={{ label: 'I OVERRIDE · TO CONFIRM', text: 'Keep both access routes visible\nwhen the reader chooses.' }}
        />
        <Row mt={39} size={22} label="WHY THE OVERRIDE" text="The product serves occasional buyers as well as recurring readers. I would prioritize that known requirement over an AI suggestion to promote one model." />
        <Eyebrow mt={62}>PROPOSED DECISION PATH</Eyebrow>
        <Steps
          mt={28}
          steps={[
            { label: 'CHECK THE RECORD', text: 'Retrieve the two access models\nfrom project requirements.' },
            { label: 'COMPARE THE OPTIONS', text: 'Review a subscription-first\nversion against equal access.' },
            { label: 'KEEP THE CHOICE', text: 'Carry both routes into\nthe design for review.' },
          ]}
        />
        <Body mt={41} className="cs-w1200 cs-lh150" text="Claude / GPT + project notes + local MCP provide context and variations. The designer checks the source requirement and makes the decision." />
        <Body mt={46} size={17} muted className="cs-w1200" text="Evidence to add: original prompt, AI response, revised screen and a short explanation of the actual review. No conversion or time-saving result is claimed." />
      </Section>

      <Section pt={64} pb={6}>
        <Eyebrow>07 / VISUAL DESIGN WITH A PURPOSE</Eyebrow>
        <Split
          mt={33}
          variant="visual"
          heading={'Let the magazine\nbring the character.'}
          paragraphs={['I kept the interface deliberately neutral because the illustrated covers carry Ramdoot’s character. Familiar navigation and restrained controls keep attention on the magazine.']}
        />
        <Screens mt={80} variant="visual" desktop={shots.visualDesktop} mobile={shots.visualMobile} />
      </Section>

      <Section pt={64}>
        <Eyebrow>08 / WHERE THE PROJECT STANDS</Eyebrow>
        <Heading mt={30} text={'Approved. In development.\nStill learning.'} />
        <Body mt={70} className="cs-w1190" text="My contribution connects visual craft, product decisions and an AI-assisted workflow that keeps evolving requirements close to the design." />
        <Columns
          mt={72}
          items={[
            { label: 'APPROVED', text: 'V2 reader, mobile and operational design workflows.' },
            { label: 'IN DEVELOPMENT', text: 'Implementation alongside design, including AI reading features.' },
            { label: 'NEXT TO VALIDATE', text: 'Purchase clarity, reading usability, family access and summary accuracy.' },
          ]}
        />
        <Body mt={52} size={16} muted text="No post-launch performance results are claimed. Figures in product mockups are interface content, not case-study evidence." />
      </Section>

      <Footer left="RAMDOOT / VOLUNTEER DESIGN LEAD" right="UX CASE STUDY · V2" />
    </CaseStudy>
  );
}
