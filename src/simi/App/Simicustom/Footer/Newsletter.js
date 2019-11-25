import React, {useState} from "react";
import TextBox from 'src/simi/BaseComponents/TextBox';
import {Whitebtn} from 'src/simi/BaseComponents/Button';
import Identify from "src/simi/Helper/Identify";
import { SimiMutation } from 'src/simi/Network/Query'
import CUSTOMER_NEWSLETTER_UPDATE from 'src/simi/queries/customerNewsletterUpdate.graphql';
import Loading from "src/simi/BaseComponents/Loading";

const Newsletter = props => {
    // const {classes} = props;
    // console.log(classes);
    const [email, setEmail] = useState('');

    const submitNewsletter = props => {

    }

    return (
        <div className={'app-newsletter'}>
            <div className={`container app--flex pd-10-15`}>
                <div className={'newsletter__text'}>
                    <h4 className={'newsletter-title'}>
                        {Identify.__(
                            "Subscribe Newsletter"
                        )}
                    </h4>
                    <span>
                    {Identify.__(
                            "Lastest news and get early access to collection previews"
                        )}
                    </span>
                </div>
                <SimiMutation mutation={CUSTOMER_NEWSLETTER_UPDATE}>
                    {(updateCustomer, {loading, data}) => {
                        console.log(data);
                        if(loading) return <Loading />
                        return (
                            <form
                                className={'newsletter__form'}
                                onSubmit={e => {
                                    e.preventDefault();
                                    updateCustomer({variables: {email, isSubscribed: true}})
                                }}
                            >
                                <TextBox
                                    // label={Identify.__("Newsletter")}
                                    type="email"
                                    name="email"
                                    class={'.newsletter__form input'}
                                    placeholder={Identify.__("Enter email address")}
                                    id="harlow-newsletter"
                                    defaultValue={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                <Whitebtn
                                    type="submit"
                                    className="btn-secondary"
                                    text={Identify.__("Sign Up")}
                                />
                            </form>
                        )
                    }}
                    
                </SimiMutation>
              
            </div>
        </div>
    )
}

export default Newsletter;