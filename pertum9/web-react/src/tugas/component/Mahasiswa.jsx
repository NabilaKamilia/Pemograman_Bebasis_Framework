import React from "react";


const Mahasiswa = (props) => {
    return (
        // <div className="artikel">
        //     <div className="gambar-artikel">
        //         <img src="http://placeimg.com/80/80/tech" alt="Gambar Thumbnail yaitu Artikel" />
        //     </div>
            <div className="konten-artikel">
                <div className="NIM">{props.nim}</div>
                <p className="Nama">{props.nama}</p>
                <p className="Alamat">{props.alamat}</p>
                <p className="No_HP">{props.hp}</p>
                <p className="Tahun Angkatan">{props.angkatan}</p>
                <p className="Status">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>            
            </div>
        // </div>
    )
}

export default Mahasiswa