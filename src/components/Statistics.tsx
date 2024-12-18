export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: Array<StatsProps> = [
    {
      quantity: '5K+',
      description: 'Clients Served',
    },
    {
      quantity: '3.2K+',
      description: 'Projects Completed',
    },
    {
      quantity: '15+',
      description: 'Years of Experience',
    },
    {
      quantity: '98%',
      description: 'Client Satisfaction',
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-lg font-bold text-primary sm:text-4xl">{quantity}</h2>
            <p className="text-muted-foreground sm:text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
