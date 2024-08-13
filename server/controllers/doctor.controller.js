export const doctorsList = (req, res) => {
  const arr = [
    {
      id: 1,
      name: 'James',
    },
    {
      id: 2,
      name: 'John',
    },
    {
      id: 3,
      name: 'Steve',
    },
    {
      id: 4,
      name: 'Bob',
    },
    {
      id: 5,
      name: 'Dice',
    },
  ]

  return res.status(200).json({
    status: true,
    message: 'Doctors list fetched successfully',
    list: arr,
  })
}