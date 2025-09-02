import {
  GradientText,
  SectionDescription,
  SectionSubtitle,
  SectionTitle,
  SectionWrapper,
} from '@/components/PageItems';

const aboutContent = {
  title: 'About Fact-Digi',
  subtitle: 'Who We Are',
  description:
    'Fact-Digi is a technology solutions company specializing in Business Intelligence, Artificial Intelligence, Data Solutions, and Application Development. We empower organizations to harness the full potential of data and technology to achieve measurable business outcomes.',

  mission:
    'To accelerate digital transformation by delivering innovative, data-driven, and scalable technology solutions that create lasting business impact.',

  vision:
    'To be the trusted global partner for organizations seeking to bridge data, technology, and strategy into sustainable growth.',

  values: [
    {
      title: 'Innovation',
      description:
        'We continuously explore emerging technologies to deliver forward-thinking and impactful solutions.',
    },
    {
      title: 'Expertise',
      description:
        'Our team combines deep industry knowledge with technical excellence to solve complex challenges.',
    },
    {
      title: 'Collaboration',
      description:
        'We work hand-in-hand with clients as strategic partners, ensuring alignment and shared success.',
    },
    {
      title: 'Integrity',
      description:
        'We are committed to transparency, ethical practices, and building long-term relationships.',
    },
    {
      title: 'Excellence',
      description:
        'We set high standards in everything we do, ensuring consistent quality and measurable results.',
    },
    {
      title: 'Customer-Centricity',
      description:
        'We place clients at the heart of our solutions, tailoring strategies to their unique needs and goals.',
    },
  ],

  expertise: [
    {
      title: 'Business Intelligence',
      description:
        'Transform raw data into actionable insights with tailored BI dashboards, analytics, and reporting tools.',
    },
    {
      title: 'Artificial Intelligence',
      description:
        'Leverage AI and machine learning for automation, predictive analytics, and smarter decision-making.',
    },
    {
      title: 'Data Solutions',
      description:
        'Design and implement end-to-end data management systems, from integration to advanced analytics.',
    },
    {
      title: 'Application Development',
      description:
        'Build scalable, secure, and user-centric applications across web and mobile platforms.',
    },
  ],

  stats: [
    { number: '150+', label: 'Successful Projects' },
    { number: '50+', label: 'Trusted Clients' },
    { number: '5+', label: 'Years of Excellence' },
    { number: '24/7', label: 'Dedicated Support' },
  ],
};

function AboutValues({ values }: { values: Array<{ title: string; description: string }> }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => (
        <div
          key={value.title}
          className="rounded-lg border bg-muted/50 p-6 transition-colors hover:bg-muted/70"
        >
          <h3 className="mb-3 text-xl font-semibold text-brand dark:text-brand-100">
            {value.title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground">{value.description}</p>
        </div>
      ))}
    </div>
  );
}

function ExpertiseSection({
  expertise,
}: {
  expertise: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {expertise.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border bg-gradient-to-br from-background to-muted/30 p-6"
        >
          <h3 className="mb-3 text-xl font-bold text-brand dark:text-brand-100">{item.title}</h3>
          <p className="text-base text-muted-foreground">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function StatsSection({ stats }: { stats: Array<{ number: string; label: string }> }) {
  return (
    <div className="to-brand-200/10 rounded-lg bg-gradient-to-r from-brand/10 p-8">
      <div className="grid gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="mb-2 text-4xl font-bold text-brand dark:text-brand-100">
              {stat.number}
            </div>
            <div className="text-base text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <SectionWrapper className="mt-20 space-y-20" id="about">
      {/* Hero Section */}
      <div className="flex flex-col justify-center space-y-6 text-center">
        <SectionSubtitle>{aboutContent.subtitle}</SectionSubtitle>
        <SectionTitle>
          <GradientText>{aboutContent.title}</GradientText>
        </SectionTitle>
        <SectionDescription className="mx-auto max-w-4xl text-lg leading-relaxed">
          {aboutContent.description}
        </SectionDescription>
      </div>

      {/* Stats Section */}
      <StatsSection stats={aboutContent.stats} />

      {/* Mission & Vision */}
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-brand dark:text-brand-100">Our Mission</h2>
          <p className="text-base text-muted-foreground">{aboutContent.mission}</p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-brand dark:text-brand-100">Our Vision</h2>
          <p className="text-base text-muted-foreground">{aboutContent.vision}</p>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="space-y-12">
        <div className="text-center">
          <SectionTitle>
            <GradientText>Our Expertise</GradientText>
          </SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            We focus on four key areas that drive digital transformation and business growth.
          </SectionDescription>
        </div>
        <ExpertiseSection expertise={aboutContent.expertise} />
      </div>

      {/* Our Values */}
      <div className="space-y-8">
        <div className="text-center">
          <SectionTitle>
            <GradientText>Our Values</GradientText>
          </SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            The guiding principles that shape our culture and define the way we work.
          </SectionDescription>
        </div>
        <AboutValues values={aboutContent.values} />
      </div>
    </SectionWrapper>
  );
}
