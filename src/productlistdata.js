export const productList = [
    {
        id: 1,
        kind: "API-Service",
        productName: "URL Shortener",
        mainFeatures: ["URL Shortener", "GET API", "POST API", "Database"],
        img: "Chk-Proj1.png",
        ts: ["JAVA 11", "Springboot", "Docker", "Container", "Liquibase"],
        link: "https://www.canva.com/design/DAFABrrBq8Q/DyvD98dG7bhDhA__Hwungg/view?utm_content=DAFABrrBq8Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
        detail: "URL Shortener Service is the same as the name sounds. It shortens the URL given and gives the short one back to the user, and then after that, the short URL could be used to enter the full URL website. This service will be able to receive a full URL and return short URL to users.",
        githubLink: "https://github.com/p-chk/url-shortener"
    },
    {
        id: 2,
        kind: "API-Service",
        productName: "Product Availability Calculation",
        mainFeatures: ["Product Availablity", "Notification", "POST API", "Database"],
        img: "spring-boot.png",
        ts: ["JAVA 8", "Springboot", "Docker", "Kafka", "Kubernetes", "Openshift", "Container", "Liquibase"],
        detail: "Product Availability uses material and plant data to calculate probability of fatest duration product can be delivered. It can be uses when customer are placing an order, or the order was placed, however, still waiting. It can help customer aware what should be the expectation and can plan ahead."
    },
    {
        id: 3,
        kind: "API-Service",
        productName: "Stock Logistics P44 Integration",
        mainFeatures: ["3rd Party Integration", "Stock Movement", "POST API", "Database"],
        img: "spring-boot.png",
        ts: ["JAVA 11", "Springboot", "Docker", "Kafka", "Kubernetes", "Container","AKS", "Liquibase"],
        detail: "This service help forward necessary information for P44 to assist in Logistics tracking. After the service receive and process a order, it will compose necessary information and submit information to P44, and P44 will then help track the information as needed."
    },
    {
        id: 4,
        kind: "Distribution Channel",
        productName: "QR Code Voucher Distribution",
        mainFeatures: ["QR Code", "Voucher", "Distribution List"],
        img: "sharepoint.png",
        ts: ["Python", "Sharepoint", "Permission"],
        detail: "Code List was received, and tecnical solution need to be provided. After days of investigation, the best solution that fit the time frame is created a QR Code using Python, and upload those QR Code to Sharepoint. Last, create and execute the workflow to set the permissions for individual to see their own code"
    },
]