$(document).ready(function() {
        // Lấy danh sách tỉnh/thành phố ban đầu
        $.ajax({
            url: 'https://esgoo.net/api-tinhthanh/1/0.htm',
            type: 'GET',
            dataType: 'json'
        })
            .done(async function(data_tinh) {
                if (data_tinh.error == 0) {
                    // Hiển thị danh sách tỉnh/thành phố ban đầu
                    $.each(data_tinh.data, function(key_tinh, val_tinh) {
                        $("#option-tinh").append('<li data-id="' + val_tinh.id + '">' + val_tinh.full_name + '</li>');
                    });

                    // Xử lý sự kiện khi click vào một tỉnh/thành phố
                    $('#option-tinh li').on('click', async function(e) {
                        var idTinh = $(this).data('id');
                        $('#tinh .ic-select-inner span,#quan .ic-select-inner span').css('color', 'black');

                        // Xóa các mục cũ trong danh sách quận/huyện và phường/xã
                        $("#option-quan").empty();
                        $("#option-phuong").empty();
                        $('#quan .ic-select-inner span').text("Quận/Huyện");
                        $('#phuong .ic-select-inner span').text("Phường/Xã");

                        // Lấy danh sách quận/huyện khi click vào tỉnh/thành phố
                        try {
                            const data_quan = await $.ajax({
                                url: 'https://esgoo.net/api-tinhthanh/2/' + idTinh + '.htm',
                                type: 'GET',
                                dataType: 'json'
                            });

                            if (data_quan.error == 0) {
                                // Hiển thị danh sách quận/huyện
                                $.each(data_quan.data, function(key_quan, val_quan) {
                                    $("#option-quan").append('<li data-id="' + val_quan.id + '">' + val_quan.full_name + '</li>');
                                });

                                // Xử lý sự kiện khi click vào một quận/huyện
                                $('#option-quan li').on('click', async function(e) {
                                    var idQuan = $(this).data('id');

                                    // Xóa các mục cũ trong danh sách phường/xã
                                    $("#option-phuong").empty();
                                    $('#phuong .ic-select-inner span').text("Phường/Xã");

                                    // Lấy danh sách phường/xã khi click vào quận/huyện
                                    try {
                                        const data_phuong = await $.ajax({
                                            url: 'https://esgoo.net/api-tinhthanh/3/' + idQuan + '.htm',
                                            type: 'GET',
                                            dataType: 'json'
                                        });

                                        if (data_phuong.error == 0) {
                                            // Hiển thị danh sách phường/xã
                                            $.each(data_phuong.data, function(key_phuong, val_phuong) {
                                                $("#option-phuong").append('<li data-id="' + val_phuong.id + '">' + val_phuong.full_name + '</li>');
                                            });
                                        } else {
                                            console.error('Lỗi khi lấy dữ liệu phường/xã:', data_phuong.error);
                                        }
                                    } catch (error) {
                                        console.error('Lỗi khi lấy dữ liệu phường/xã:', error);
                                    }
                                });
                            } else {
                                console.error('Lỗi khi lấy dữ liệu quận/huyện:', data_quan.error);
                            }
                        } catch (error) {
                            console.error('Lỗi khi lấy dữ liệu quận/huyện:', error);
                        }
                    });
                } else {
                    console.error('Lỗi khi lấy dữ liệu tỉnh/thành phố:', data_tinh.error);
                }
            })
            .fail(function(jqXHR, textStatus, errorThrown) {
                console.error('Lỗi khi lấy dữ liệu tỉnh/thành phố:', textStatus, errorThrown);
            });

    $('#quan, #phuong').click(function(e) {
        const tp = $('#tinh .ic-select-inner span').text().trim();
        if (!tp || tp === "Tỉnh/Thành phố*") {
            $('#tinh .ic-select-inner span').css('color', 'red');
            return false;
        } else {
            $('#tinh .ic-select-inner span').css('color', 'black');
        }
    });

    function convertVND(lamportsToSend) {
        return $.ajax({
            url: 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=vnd',
            type: 'GET',
            dataType: 'json'
        }).then(data => {
            const exchangeRate = data.solana.vnd;
            const {LAMPORTS_PER_SOL}=solanaWeb3;
            // Tính số SOL cần chuyển
            const amountSOL = lamportsToSend / exchangeRate;
            const lambordsVnd = Math.floor(amountSOL * Math.pow(10, 9));
            const sol = lambordsVnd/LAMPORTS_PER_SOL
            return sol;
        }).catch(error => {
            console.error('Failed to fetch exchange rate:', error);
            alert('Failed to fetch exchange rate. Please try again later.');
            return null;
        });
    }

    $('#conformCheckout').on('click', function(e) {
        e.preventDefault();
        const provider = window.solana;
        if ("solana" in window) {
            if (provider.isPhantom) {
                const tienViet = $('#tienViet').val();
                convertVND(tienViet).then(lambordsVnd => {
                    if (lambordsVnd !== null) {
                        $('.ic-total-cost').html(`<span>Total Cost:</span> <i>${lambordsVnd}</i> SOL`);
                        $(this).attr({
                            "data-bs-toggle": "modal",
                            "data-bs-target": "#ic-success-cart"
                        });
                        $('#ic-success-cart').modal('show');
                        $('#thanhToan').off('click').on('click', function() {
                            transferSOL(lambordsVnd);
                        });
                    }
                });

            }
        } else {
            $('#checkout-id').modal('hide');
            Swal.fire({
                title: "Bạn chưa cài đặt ví",
                text: "Vui lòng cài đặt ví Phantom để tiếp tục.",
                icon: "error",
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "https://www.phantom.app/";
                }
            });
        }
    });

    async function transferSOL(lambordsVnd) {
        const {
            Connection,
            Transaction,
            SystemProgram,
            PublicKey,
            LAMPORTS_PER_SOL
        } = solanaWeb3;

        if (!window.solana || !window.solana.isPhantom) {
            alert("Chưa kết nối ví");
            return;
        }

        try {
            console.log("Bắt đầu giao dịch");
            const provider = window.solana;
            const fromPublicKey = provider.publicKey;
            const toPublicKey = new PublicKey("pTBT4iMfAoqscybZYbDM2eyppK2anP57eTrkZfdwzmz");
            console.log("From:", fromPublicKey.toString());
            console.log("To:", toPublicKey.toString());

            console.log("Kết nối với Solana");
            const connection = new Connection("https://api.devnet.solana.com", "confirmed");

            console.log("Lấy thông tin blockhash");
            const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

            console.log("Tính phí giao dịch");
            const { feeCalculator } = await connection.getRecentBlockhash();
            const estimatedFee = feeCalculator.lamportsPerSignature;
            console.log("Phí ước tính:", estimatedFee);

            console.log("Tạo giao dịch");
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: fromPublicKey,
                    toPubkey: toPublicKey,
                    lamports: LAMPORTS_PER_SOL,
                })
            );

            transaction.recentBlockhash = blockhash;
            transaction.feePayer = fromPublicKey;

            // Ký giao dịch với Phantom wallet
            const { signature } = await provider.signAndSendTransaction(transaction);

            // Xác nhận giao dịch
            await connection.confirmTransaction(signature, 'confirmed');
            console.log("Giao dịch đã được gửi");

            const newBalance = await connection.getBalance(fromPublicKey);
            Swal.fire({
                title: "Thông báo",
                text: "Giao dịch thành công. Số dư hiện tại là: "+newBalance,
                icon: "success"
            });
            console.log("Giao dịch thành công!");

            const getBalanceCurrent = await getBalance();
            $('.getBalanceCurrent').html(`Số dư hiện tại: <i>${newBalance/LAMPORTS_PER_SOL}</i> SOL`);

        } catch (error) {
            if (error.message == "User rejected the request.") {
                Swal.fire({
                    title: "Thông báo",
                    text: "Bạn đã từ chối giao dịch",
                    icon: "warning"
                });
            }
            else {
                console.error("Chi tiết lỗi:", error);
                Swal.fire({
                    title: "Lỗi",
                    text: `Đã có lỗi xảy ra khi giao dịch: ${error.message}`,
                    icon: "error"
                });
            }

        }
    }

    async function connectToWallet() {
        const { solana } = window;
        const {Connection,LAMPORTS_PER_SOL,} = solanaWeb3;
        if (solana) {
            const response = await solana.connect();
            publicKey = response.publicKey.toString();
            const getBalanceCurrent = await getBalance();
            $('.ic-specification-list').append('<li>Public key:'+publicKey+'</li>' +
                '<li class="getBalanceCurrent">Số dư hiện tại: '+getBalanceCurrent+' SOL</li>')
            Swal.fire({
                title: "Good job!",
                text: "Bạn đã kết nối ví thành công!",
                icon: "success"
            });
            return true;
        }
        return false;
    }
    async function getBalance(publicKey) {
        const {
            Connection,
            PublicKey,
            LAMPORTS_PER_SOL,
        } = solanaWeb3;
        const solana = window.solana;
        try {

            const connection = new Connection("https://api.devnet.solana.com", "confirmed");

            // const publicKeyString = document.getElementById("key").innerHTML;
            const publicKey = new PublicKey(solana.publicKey);
            const balance = await connection.getBalance(publicKey);
            const balanceSOl = balance / LAMPORTS_PER_SOL;
            return balanceSOl;
        } catch (error) {
            console.error("Lỗi:", error);
        }
    }
    $('#connectToWallet').click( function() {
        connectToWallet();

    })


});


