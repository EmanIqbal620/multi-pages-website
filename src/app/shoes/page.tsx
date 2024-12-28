import Image from 'next/image';

export default function Shoes() {
    const shoesData = [
        { id: 1, name: 'AirMax', price: 12000, description: "High-performance sports shoe", image: '/id1img.webp' },
        { id: 2, name: 'ClassicLoafers', price: 8000, description: "Timeless and elegant loafers", image: '/id2.jpg' },
        { id: 3, name: 'TrailBlazer', price: 15000, description: "Rugged shoe for outdoor adventures", image: '/id3 (2).jpg' },
        { id: 4, name: 'UrbanSneaks', price: 10000, description: "Trendy sneakers for daily wear", image: '/id4 (1).jpg' },
        { id: 5, name: 'EliteFormal', price: 14000, description: "Premium formal shoes for occasions", image: '/id5 (1).jpg' },
        { id: 6, name: 'Opulence', price: 25000, description: "Luxurious handcrafted leather shoes for elite comfort and style", image: '/id6 (1).jpg' }
    ];

    return (
        <div>
            <div className="shoes">
                {shoesData.map((shoes) => (
                    <div key={shoes.id} className="shoes-card">
                        <Image
                            src={shoes.image}
                            alt={shoes.name}
                            width={300} // Set appropriate width
                            height={300} // Set appropriate height
                        />
                        <h3>{shoes.name}</h3>
                        <p>{shoes.description}</p>
                        <div className="price">${shoes.price}</div>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
