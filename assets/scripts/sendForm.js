
	
	const assert = {
		anyway: 25,
		other: 25,
		that(any) {
			this.anyway = any;
			return this;
		},
		equals(other) {
			return this.anyway === other;
		}
	}
	
	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	
	document.addEventListener('DOMContentLoaded', () => {
		const contactForm = document.getElementById("contact-form");
		const emailField = document.getElementById("email");
		const categoryField = document.getElementById("service-category");
		const detailsField = document.getElementById("details");
		
		
		contactForm.addEventListener('submit', (ev) => {
			ev.preventDefault();
			
			// start of direct testing
			console.log(assert.that(detailsField.value).equals("Some info about this service"));
			console.log(assert.that(categoryField.value).equals("Для нього"));
			// end of direct testing
			
			if (validateEmail(emailField.value) && detailsField.value.length >= 10) {
				//contactForm.submit();
				console.log("submitted");
			}
			
		});	
	});
	
// start of Mocha testing
	function mochaTest() {
		const emailField = document.getElementById("email");
		
		emailField.value = "dev3@com.ua";
		describe("validateEmail", function() {
			it("перевіряє, чи емейл валідний", function() {
				assertThat.equal(validateEmail(emailField.value), true);
			});
		});
	}
	
	mochaTest();
// end of Mocha testing	

