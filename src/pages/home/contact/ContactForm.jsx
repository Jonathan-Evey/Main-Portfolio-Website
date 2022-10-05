const ContactForm = () => {
  return (
    <form className="margin-block-end-96" action="">
        <div className="grid-two-column margin-block-end-24">
            <div className="flex-column">
                <label htmlFor="">name</label>
                <input type="text" name="" id="" />
            </div>
            <div className="flex-column">
                <label htmlFor="">email</label>
                <input type="email" name="" id="" />
            </div>
        </div>
        <div className="flex-column margin-block-end-24">
            <label htmlFor="">subject</label>
            <input type="text" name="" id="" />
        </div>
        <div className="flex-column margin-block-end-24">
            <label htmlFor="">message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button className="btn submit underline | fs-600 fw-bold padding-inline-24 margin-inline-start-24 show" type="submit">send message</button>
    </form>
  )
}

export default ContactForm