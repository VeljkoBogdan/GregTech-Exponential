GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        console.log("Modifying vein: " + id)
        vein.density(1.0)
    })
})