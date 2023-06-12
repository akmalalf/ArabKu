const axios = require('axios')

module.exports = {

  // Mengambil kode kota berdasarkan nama kota
  kodeKota: async (req, res) => {
    try {
      const namaKota = req.body.namaKota
      const url = `https://api.banghasan.com/sholat/format/json/kota/nama/${namaKota}`;
      const response = await axios(url)
      const data = response.data
      res.send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error occurred while fetching data');
    }
  },

  // Mengambil daftar semua kota
  allKota: async (req, res) => {
    try {
      const url = `https://api.banghasan.com/sholat/format/json/kota`;
      const response = await axios(url)
      const data = response.data
      res.send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error occurred while fetching data');
    }
  },

  // Mengambil jadwal sholat berdasarkan kota dan tanggal
  prayingTime: async (req, res) => {
    try {
      const kota = req.body.kota
      const tanggal = req.body.tanggal //format "yyyy-mm-dd"
      const url = `https://api.banghasan.com/sholat/format/json/jadwal/kota/${kota}/tanggal/${tanggal}`
      const response = await axios.get(url)
      const data = response.data
      res.send(data)
    } catch (error) {
      console.error(error)
      res.status(500).send('Error occurred while fetching data');
    }
  }
}
