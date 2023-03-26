import * as React from 'react';

interface ContactCardProps{
  address?: string[];
  email?: string;
  phone?: string;
}

class ContactCard extends React.Component<ContactCardProps, {}> {
  render() {
    const {address, email, phone} = this.props;
    let data;
    if (email) data = { icon: "email.png", title: "E-mail", body: (<p>{email}</p>) };
    else if (phone) data = { icon: "phone.png", title: "Phone", body: (<p>{phone}</p>) };
    else if (address) data = { icon: "address.png", title: "Address", body: address.map((str, i) => (<p key={i}>{str}</p>)) };
    if (!data) return null;
    return (  
      <div className="contact-item">
        <img src={"contact-icons/"+data.icon} />
        <h2>{data.title}</h2>
        {data.body}
      </div>
    )
  }
}

export default ContactCard;