---
title: Home
author: Zaw Nay Lin
---

# Contact Us APIs

For Contact Us Page, these are available endpoint functions:

## getContactInfo

### Description

Get the contact information of Lat Twae Education.

### Return Type 

```ts
interface ContactInfo {
  phoneNumbers?: string[];
  emailAddresses?: string[];
  address?: string;
}

declare const getContactInfo: () => Promise<ContactInfo>;
```

### Example

```tsx
import { ContactUs } from "lte-web-backend";
import { useQuery } from "react-query";

export const ContactCard = () => {
  const { data } = useQuery("ContactInfo", ContactUs.getContactInfo);

  return (
    <div>
      <p>Phone numbers: {data.phoneNumbers?.join(", ")}</p>
      <p>Email Addresses: {data.emailAddresses?.join(", ")}</p>
      <p>Address: {data.address || "Not yet available"}</p>
    </div>
  );

};
```
