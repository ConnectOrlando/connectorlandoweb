import Card from '@app/components/card';

export default function Companies() {
  return (
    <main>
      <Card
        image="https://sites.psu.edu/iabcpennstate/wp-content/uploads/sites/18140/2015/01/professional-woman-4.jpg"
        header="Investor Profile"
        subtitle="XYZ business owner and Tech Investor"
        location="Orlando, FL"
        savedConnections={40}
        savedBusiness={52}
      ></Card>

      <Card
        image="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80"
        header="Random header"
        subtitle="i dont know what to write"
        location="Mami, FL"
        savedConnections={1}
        savedBusiness={3}
      ></Card>
    </main>
  );
}
