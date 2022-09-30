import { Link } from "react-router-dom";
import { Box, Button,  Flex, Heading, HStack, Image, Text } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons";



function Navbar() {
    return (
        <div>



            <Flex minWidth='max-content' alignItems='center' gap='2' my="1" py="2" mx="10 " mt="-10px" >
           

                <Box>
                    <HStack spacing='60px' mx="5">
                        <Link to="/homepage"><Image boxSize='150px' src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg' alt='Dan Abramov' /></Link>

                        <Link to="/" ><Text as='b' id="product" ><h4>Product
                            <div id="Product_hover">
                                <div className="triangle"></div>
                                <div>
                                    <div>
                                        <br />
                                        <Heading color="gray" as="h4" size='xm'>Product</Heading>
                                        <br />

                                        <Link>Features</Link>
                                        <a>Integrations</a>
                                        <a>Docomentations</a>
                                        <a>Api</a>
                                        <a>Status</a>
                                    </div>
                                    <div>
                                        <br />
                                        <Heading color="gray" size='sm'>SOLUTIONS FOR...</Heading>
                                        <br />

                                        <Link>Open Source</Link>
                                        <a>EnterPrices</a>
                                        <a>StartsUps</a>
                                        <a>Education</a>

                                    </div>
                                   



                                </div>

                                {/* <Box  mt="22vh">
                                        <Box display="flex" justifyContent="space-between" >
                                            <Button>Product Update</Button>
                                            <Text fontSize='xs'>Introducing Codecov's New Uploader</Text>
                                        </Box >
                                    </Box> */}
                                     






                            </div>
                        </h4></Text></Link>
                        <Link to="/doco"><Text as='b' >Documentation</Text></Link>
                        
                
                        <Link to="/customer"><Text as='b' id="customer">Customer
                        <div id="customer_hover">
                            <Heading size='xs' color="gray">CUSTOMERS</Heading>
                            <br/>
                            <a>Our Customers</a>
                            <a> Community</a>
                            <a> Support</a>
                            <br/>
                          

                            <Text as="b" color="#f01f7a" fontSize='xs' >Join the Codecov community! <ArrowForwardIcon/> </Text>
                        </div>
                        
                        
                        </Text></Link>
                        <Link to="/resources" ><Text as='b'>Resources</Text></Link>
                        <Link to="/pricing" ><Text as='b'>Pricing</Text></Link>
                        <Link to="/contact" ><Text as='b'>Contact</Text></Link>


                        <HStack spacing='70px' mx="5"  >
                            <Link to="/login" ><Text as='b' id="login" >Login
                            
                                <div id="login_hover">
                                    <a>Github</a>
                                    <a>gitLab</a>
                                    <a>Bitbuckut</a>
                                </div>
                               

                            
                            
                            </Text></Link>

                            <Link to="/get_demo"><Button colorScheme='blue' >Get Demo</Button></Link>

                        </HStack>

                    </HStack>
                </Box>


            </Flex>

        </div>
    )
}
export default Navbar