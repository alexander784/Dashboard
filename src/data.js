export const menu = [
    {
        id:1,
        title:"main",
        listItems: [
            {
                id:1,
                title:"Homepage",
                url:"/",
                icon:"home.svg",
            },

            {
                id:2,
                title:"Profile",
                url:"/users/1",
                icon:"user.svg",
            },
        ],
    },
                    {
                        id:2,
                        title:"lists",
                        listItems: [
                            {
                                id:1,
                                title:"Users",
                                url:"/users",
                                icon:"user.svg"
                            },
                            {
                                id:2,
                                title:"Products",
                                url:"/products",
                                icon:"product.svg"
                            },

                            {
                                id:3,
                                title:"Orders",
                                url:"/orders",
                                icon:"order.svg"
                            },

                            {
                                id:4,
                                title:"Posts",
                                url:"/post",
                                icon:"post2.svg"
                            },
                        ]
                    },

                    {
                        id:3,
                        title:"general",
                        listItems: [
                            {
                                id:1,
                                title:"Elements",
                                url:"/",
                                icon:"element.svg"
                            },
                            {
                                id:2,
                                title:"Notes",
                                url:"/",
                                icon:"note.svg"
                            },

                            {
                                id:3,
                                title:"Forms",
                                url:"/",
                                icon:"form.svg"
                            },

                            {
                                id:4,
                                title:"Calendar",
                                url:"/",
                                icon:"calendar.svg"
                            },
                        ]
                    },

                    {
                        id:4,
                        title:"Maintenance",
                        listItems: [
                            {
                                id:1,
                                title:"Settings",
                                url:"/",
                                icon:"setting.svg"
                            },
                            {
                                id:2,
                                title:"Backups",
                                url:"/",
                                icon:"backup.svg"
                            },

                            {
                                id:3,
                                title:"Orders",
                                url:"/orders",
                                icon:"order.svg"
                            },

                            {
                                id:4,
                                title:"Posts",
                                url:"/post",
                                icon:"post2.svg"
                            },
                        ],
                    },

                    {
                        id:5,
                        title:"analytics",
                        listItems: [
                            {
                                id:1,
                                title:"Charts",
                                url:"/",
                                icon:"chart.svg"
                            },
                            {
                                id:2,
                                title:"logs",
                                url:"/",
                                icon:"log.svg"
                            },
                        ],
                    },
        ];

export const topDealUsers = [
    {
        id:1,
        img:"",
        username:"Elvis",
        email:"elvis@gmail.com",
        amount:"2300",
    },
    {
        id:2,
        img:"",
        username:"Lilian",
        email:"lili@gmail.com",
        amount:"2300",
    },
    {
        id:3,
        img:"",
        username:"Brenton",
        email:"brenton@gmail.com",
        amount:"2300",
    },
    {
        id:4,
        img:"",
        username:"Adeline",
        email:"adeline@gmail.com",
        amount:"2300",
    },
    {
        id:5,
        img:"",
        username:"Tina",
        email:"kipas@gmail.com",
        amount:"4300",
    },
    {
        id:6,
        img:"",
        username:"simion",
        email:"simion@gmail.com",
        amount:"5800",
    },
    {
        id:7,
        img:"",
        username:"Carol",
        email:"carol@gmail.com",
        amount:"6000",
    },
]



    export const chartBoxUser = {
        color: "#8884d8",
        icon: "/userIcon.svg",
        title: "Total Users",
        number: "11.238",
        dataKey: "users",
        percentage: 45,
        chartData: [
          { name: "Sun", users: 400 },
          { name: "Mon", users: 600 },
          { name: "Tue", users: 500 },
          { name: "Wed", users: 700 },
          { name: "Thu", users: 400 },
          { name: "Fri", users: 500 },
          { name: "Sat", users: 450 },
        ],
      };

      export const chartBoxProduct = {
        color: "skyblue",
        icon: "/productIcon.svg",
        title: "Total Products",
        number: "238",
        dataKey: "products",
        percentage: 21,
        chartData: [
          { name: "Sun", products: 400 },
          { name: "Mon", products: 600 },
          { name: "Tue", products: 500 },
          { name: "Wed", products: 700 },
          { name: "Thu", products: 400 },
          { name: "Fri", products: 500 },
          { name: "Sat", products: 450 },
        ],
      };
      export const chartBoxRevenue = {
        color: "teal",
        icon: "/revenueIcon.svg",
        title: "Total Revenue",
        number: "$56.432",
        dataKey: "revenue",
        percentage: -12,
        chartData: [
          { name: "Sun", revenue: 400 },
          { name: "Mon", revenue: 600 },
          { name: "Tue", revenue: 500 },
          { name: "Wed", revenue: 700 },
          { name: "Thu", revenue: 400 },
          { name: "Fri", revenue: 500 },
          { name: "Sat", revenue: 450 },
        ],
      };
      export const chartBoxConversion = {
        color: "gold",
        icon: "/conversionIcon.svg",
        title: "Total Ratio",
        number: "2.6",
        dataKey: "ratio",
        percentage: 12,
        chartData: [
          { name: "Sun", ratio: 400 },
          { name: "Mon", ratio: 600 },
          { name: "Tue", ratio: 500 },
          { name: "Wed", ratio: 700 },
          { name: "Thu", ratio: 400 },
          { name: "Fri", ratio: 500 },
          { name: "Sat", ratio: 450 },
        ],
      };

      

    