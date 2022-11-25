# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { username: 'Tommy', email: 'tommy@test.com', password: 'password' },
  { username: 'Bobby', email: 'bobby@test.com', password: 'password' },
  { username: 'Sarah', email: 'sarah@test.com', password: 'password' },
  { username: 'Lilly', email: 'lilly@test.com', password: 'password' },
  { username: 'Jimmy', email: 'jimmy@test.com', password: 'password' },
  { username: 'Cammy', email: 'cammy@test.com', password: 'password' },
])

properties = Property.create([
  {
    title: 'Studio APT Minutes from Metro',
    description: '10 minute bus ride to NYC Times Square. Bus stop is a 2 minute walk from house, 24/7. Super safe and quiet.',
    city: 'New York',
    country: 'us',
    property_type: 'studio',
    price_per_night: 50,
    max_guests: 2,
    bedrooms: 0,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/1.jpg',
    user: users.first
  },{
    title: 'Bright & Airy in Highland Park',
    description: 'Spacious two bedroom home with everything you need for an NYC trip. On the first floor but above street leve, two bedrooms, bathroom, kitchen and WIFI.',
    city: 'New York',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 59,
    max_guests: 3,
    bedrooms: 2,
    beds: 2,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/2.jpg',
    user: users.first
  },{
    title: 'Sunny and Modern in East Village',
    description: 'Clean and comforable room in the East Village with spectacular views of downtown Manhattan. One block from Tompkins Square Park. Thanks for taking a look.',
    city: 'New York',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 70,
    max_guests: 1,
    bedrooms: 1,
    beds: 1,
    baths: 0,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/3.jpg',
    user: users.first
  },{
    title: 'Beautiful Brownstone Apartment',
    description: 'A large studio apartment with WiFi for 2 or 4 people. Accessible to all forms of transportation, bus/subway at 125th Street in Harlem. Great for short or long term stays. This is not a party house please be respectful of the neighbor.',
    city: 'New York',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 80,
    max_guests: 4,
    bedrooms: 0,
    beds: 3,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/4.jpg',
    user: users.second
  },{
    title: 'Private! entire studio, own entrance, private bath',
    description: 'Your own studio apartment, full size bed, private bathroom, closet, high ceiling, sunny, NO kitchen but there is a refrigerator, keurig, microwave.',
    city: 'New York',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 100,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/5.jpg',
    user: users.second
  },{
    title: 'Penthouse Studio East 50s Terrace',
    description: 'the photo taken on the roof is during the summer when all the plants are in full bloom. The plantings will change during seasons so please don\'t expect the plants.',
    city: 'New York',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 110,
    max_guests: 2,
    bedrooms: 0,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/6.jpg',
    user: users.second
  },{
    title: 'The Webster',
    description: 'First floor condo with new carpets and windows. Minutes to NYC, Hoboken, restaurants, parks, museums, attractions, and all the NYC area has to offer.',
    city: 'Jersey City',
    country: 'us',
    property_type: 'entire condominium',
    price_per_night: 35,
    max_guests: 6,
    bedrooms: 2,
    beds: 3,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/7.jpg',
    user: users.third
  },{
    title: 'Cute Quirky Garden apt',
    description: 'Welcome to our garden apartment in Jersey City! Perfect for tourists trying to see nyc on a budget or for a longer term sublet.',
    city: 'Jersey City',
    country: 'us',
    property_type: 'entire condominium',
    price_per_night: 73,
    max_guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/8.jpg',
    user: users.third
  },{
    title: 'Sun-drenched 1BD',
    description: 'Sun-drenched 1 bedroom with a private bathroom has all the charm of a hotel but with the warmth of home.',
    city: 'New York',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 70,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/9.jpg',
    user: users.third
  },{
    title: 'Soho 2 Bedroom Private Terrace',
    description: 'THIS IS THE MANHATTAN YOU NEVER KNEW EXISTED\nClassic Soho 2 bedroom loft\nPRIVATE TERRACE.',
    city: 'New York',
    country: 'us',
    property_type: 'entire condominium',
    price_per_night: 397,
    max_guests: 5,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/10.jpg',
    user: users.fourth
  },{
    title: 'Private Studio Apartment in Harlem',
    description: 'THIS IS THE MANHATTAN YOU NEVER KNEW EXISTED\nClassic Soho 2 bedroom ',
    city: 'New York',
    country: 'us',
    property_type: 'entire house',
    price_per_night: 105,
    max_guests: 3,
    bedrooms: 0,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/11.jpg',
    user: users.fourth
  },{
    title: 'LARGE SUNNY ROOM',
    description: 'WIFI !....you have your own PRIVATE ENTRANCE !! THE NEW JERSEY SUBWAY RUNS 24 HOURS A DAY !!.....DISCOVER A NEW AREA !!...I live in downtown jersey city because you can be in NEW YORK CITY in a few minutes.',
    city: 'Jersey city',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 43,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/12.jpg',
    user: users.fourth
  },{
    title: 'LARGE SUNNY ROOM',
    description: 'WIFI !....you have your own PRIVATE ENTRANCE !! THE NEW JERSEY SUBWAY RUNS 24 HOURS A DAY !!.....DISCOVER A NEW AREA !!...I live in downtown jersey city because you can be in NEW YORK CITY in a few minutes.',
    city: 'Jersey city',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 43,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/13.jpg',
    user: users.fifth
  },{
    title: 'cozy bright room',
    description: 'Cute and Sunny Room in Greenpoint.',
    city: 'Brooklyn',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 40,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/14.jpg',
    user: users.fifth
  },{
    title: 'Enjoy great views of the City in our Deluxe Room!',
    description: 'The Deluxe City View rooms are anything but basic. With their composite views of iconic buildings and glimpses of the New York skyline, they mix the perfect Manhattan.',
    city: 'New York',
    country: 'us',
    property_type: 'room in hotel',
    price_per_night: 121,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/15.jpg',
    user: users.fifth
  },{
    title: 'A Unique studio apartment',
    description: 'A cozy studio apartment for 2 but can accommodate 4 in a beautiful brownstone with a number of amenities. 3 minutes away from all transportation hubs/ bus /train/ taxi.',
    city: 'New York',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 68,
    max_guests: 3,
    bedrooms: 1,
    beds: 3,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/16.jpg',
    user: users.last
  },{
    title: 'Brooklyn Chill/Explore',
    description: 'Serene, lovely Bedroom with a comfortable queen size bed , modern desk and chair and a specious closet in a stylish , renovated , airy 3 bedrooms apartment full of light.',
    city: 'Brooklyn',
    country: 'us',
    property_type: 'private room in apartment',
    price_per_night: 20,
    max_guests: 2,
    bedrooms: 1,
    beds: 1,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/17.jpg',
    user: users.last
  },{
    title: 'Luxe 1-Bedroom Flat Near Manhattan',
    description: 'Luxe 1-Bedroom Flat 10 Minutes from Manhattan in Weehawken, NJ. Newly renovated flat is close to Ferry, Light-Rail and Buses to Manhattan.',
    city: 'Weehawken',
    country: 'us',
    property_type: 'entire apartment',
    price_per_night: 73,
    max_guests: 4,
    bedrooms: 1,
    beds: 2,
    baths: 1,
    image_url: 'https://cdn.altcademy.com/assets/images/medium/airbnb_clone/18.jpg',
    user: users.last
  }
])