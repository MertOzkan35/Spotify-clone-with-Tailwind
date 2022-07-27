import Section from "../components/Section";
function Home() {
  const items = [
    {
      id: 1,
      title: "Cool Things",
      description: "Mert tarfından oluşturuldu",
      image: "https://i.scdn.co/image/ab67706c0000da84b9058f9125af217aacf2bddc",
      type: "album",
    },
    {
      id: 2,
      title: "Hurts Mix",
      description: "The Rasmus , Adam Lambert , Nothing But",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/3w4VAlllkAWI6m0AV0Gn6a/tr/default",
      type: "album",
    },
    {
      id: 3,
      title: "Heavy sky",
      description: "Müzik Grubu",
      image:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/6gmUKqaZdG6f8D8pehgUsf/tr/default",
      type: "artist",
    },
    {
      id: 4,
      title: "The Stone Roses",
      description: "Müzik Grubu",
      image: "https://i.scdn.co/image/b402bab4eb25e953eef911e1fde6076e116ce0b2",
      type: "artist",
    },
    {
      id: 5,
      title: "R.E.M",
      description: "Müzik Grubu",
      image: "https://i.scdn.co/image/ab6761610000f1786334ab6a83196f36475ada7f",
      type: "artist",
    },
  ];
  return (
    <div className="grid gap-y-10">
      <Section tilte="Yakında Çalınanlar" more="/blaba" items={items} />
      <Section tilte="Sana özel bölümler " more="/blaba" items={items} />
      <Section tilte="En çok dinlediğin mix'ler " more="/blaba" items={items} />
    </div>
  );
}

export default Home;
