const terms = [
    {
        id: 1,
        title: 'Booking and Confirmation',
        terms : [
            {id: 1, condition:'By placing a booking through our mobile application, you acknowledge and agree to the terms and conditions outlined herein.'},
            {id: 2, condition:'All bookings are subject to availability, and the confirmation of a booking is contingent upon the successful processing of your payment.'}
        ]
    },
    {
        id: 2,
        title: 'Delivery and Pickup',
        terms : [
            {id: 1, condition:'We provide both delivery and pickup services for your rented musical instruments.'},
            {id: 2, condition:'Our dedicated delivery team ensures the condition of the instrument is thoroughly inspected before delivery and after pickup.'},
            {id: 3, condition:'Customers are responsible for providing accurate delivery and pickup locations and ensuring their availability during the specified time slots.'}
        ]
    },
    {
        id: 3,
        title: 'Damage and Fines',
        terms : [
            {id: 1, condition: 'Customers will be held responsible for any damage caused to the rented instrument during the rental period.'},
            {id: 2, condition: 'A fine, commensurate with the extent of damage, will be imposed to cover the repair or replacement costs.'}
        ]
    },
    {
        id: 4,
        title: 'Security Deposit',
        terms : [
            {id: 1, condition:'A security deposit, equivalent to the real price of the instrument, will be collected at the time of booking.'},
            {id: 2, condition:'The security deposit will be refunded promptly upon clearance from our pickup team, provided the instrument is returned in the same condition as received.'}
        ]
    },
    {
        id: 5,
        title: 'Clearance Process',
        terms : [
            {id: 1, condition:'Our pickup team will conduct a comprehensive inspection to ensure there are no damages beyond normal wear and tear.'},
            {id: 2, condition:'The security deposit will be released once the pickup team confirms the satisfactory condition of the instrument.'}
        ]
    },
    {
        id: 6,
        title: 'User Responsibility',
        terms : [
            {id: 1, condition:'Users are required to provide accurate and updated contact information'},
            {id: 2, condition:'Customers must report any damages or issues with the rented instrument promptly to our customer support.'}
        ]
    },
    {
        id: 7,
        title: 'Cancellation and Refund',
        terms : [
            {id: 1, condition:"Users are granted a one-day trial period upon the delivery of the rented instrument. During this trial period, users have the opportunity to test and assess the instrument's condition and suitability."},
            {id: 2, condition:'Customers may initiate a return request within one month from the date of delivery. The return request must be submitted through the app, providing detailed information about the reasons for the return.'},
            {id: 3, condition:'Refunds for returned instruments will be processed after the pickup team verifies the condition of the returned item. The security deposit will be refunded, excluding any fines or fees incurred due to damages.'},
            {id: 4, condition:'In the event of a delayed return exceeding the agreed-upon rental period, additional charges may apply. Users are advised to contact customer support promptly if they anticipate any delays in returning the instrument.'},
            {id: 5, condition:'Certain fees, such as delivery charges, may be non-refundable as specified in the terms and conditions.'}
        ]
    }
]

export default terms