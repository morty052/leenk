export const createNewEvent = async (id:string ,lastname?:string, profileId?:string | null) => {
    try {
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              eventname: "Flex with me",
              eventpricing: "free",
              host: "",
              eventvenue: "",
              eventdescription: "",
            }),
          }

        fetch(`http://localhost:3000/createEvent/${id}`, options )
          .then((response) => response.json())
          .then((response) => console.log(response))
          .catch((err) => console.error(err));
    } catch (error) {
        console.log(error)
    }

    }