export const Statistics = () => {
  interface StatsProps {
    quantity: string;
    description: string;
  }

  const stats: StatsProps[] = [
    {
      quantity: "5K+",
      description: "Clients Served",
    },
    {
      quantity: "3.2K+",
      description: "Projects Completed",
    },
    {
      quantity: "15+",
      description: "Years of Experience",
    },
    {
      quantity: "98%",
      description: "Client Satisfaction",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: StatsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              {quantity}
            </h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
